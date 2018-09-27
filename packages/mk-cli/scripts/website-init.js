'use strict';

process.on('unhandledRejection', err => {
    throw err;
});

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const paths = require('../config/paths');

module.exports = function (
    websitePath,
    websiteName,
    originalDirectory
) {
    const ownPackageName = require(path.join(__dirname, '..', 'package.json')).name;
    const ownPath = path.join(websitePath, 'node_modules', ownPackageName);
    const websitePackage = require(path.join(websitePath, 'package.json'));
    const useYarn = true;

    const templatePath = path.join(ownPath, 'template', 'website');
    if (fs.existsSync(templatePath)) {
        fs.copySync(templatePath, websitePath);

        var readmeContent = fs.readFileSync(path.join(websitePath, 'README.md'), 'utf-8');
        readmeContent = readmeContent.replace('<appName>', websitePackage.name);
        fs.writeFileSync(path.join(websitePath, 'README.md'), readmeContent);

    } else {
        console.error(
            `Application template not found: ${chalk.green(templatePath)}`
        );
        return;
    }

    fs.move(
        path.join(websitePath, 'apps', 'welcome', 'gitignore'),
        path.join(websitePath, 'apps', 'welcome', '.gitignore'),
        [],
        err => {
            if (err) {
                if (err.code === 'EEXIST') {
                    const data = fs.readFileSync(path.join(websitePath, 'apps', 'welcome', 'gitignore'));
                    fs.appendFileSync(path.join(websitePath, 'apps', 'welcome', '.gitignore'), data);
                    fs.unlinkSync(path.join(websitePath, 'apps', 'welcome', 'gitignore'));
                } else {
                    throw err;
                }
            }
        }
    );

    fs.move(
        path.join(websitePath, 'apps', 'welcome', 'npmignore'),
        path.join(websitePath, 'apps', 'welcome', '.npmignore'),
        [],
        err => {
            if (err) {
                if (err.code === 'EEXIST') {
                    const data = fs.readFileSync(path.join(websitePath, 'apps', 'welcome', 'npmignore'));
                    fs.appendFileSync(path.join(websitePath, 'apps', 'welcome', '.npmignore'), data);
                    fs.unlinkSync(path.join(websitePath, 'apps', 'welcome', 'npmignore'));
                } else {
                    throw err;
                }
            }
        }
    );

    let cdpath;
    if (originalDirectory && path.join(originalDirectory, websiteName) === websitePath) {
        cdpath = websiteName;
    } else {
        cdpath = websitePath;
    }

    const displayedCommand = useYarn ? 'yarn' : 'npm';

    console.log();
    console.log(`Create app ${websiteName} success，directory：${websitePath}`);
    console.log('Enter the directory and Run command:');
    console.log();
    console.log(chalk.cyan(`  ${displayedCommand} start`));
    console.log('    Start the development server.');
    console.log();
    console.log(
        chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}pkg`)
    );
    console.log('    Compile the application.');
    console.log();
    console.log('Start run command:');
    console.log();
    console.log(chalk.cyan('  cd'), websiteName);
    console.log(`  ${chalk.cyan(`${displayedCommand} start`)}`);
    console.log();
    console.log('Thank you for using mk!');
};
