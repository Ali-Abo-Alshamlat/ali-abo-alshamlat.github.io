import { displayTerminal } from './components/apps/terminal';
import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayRootTerminal } from './components/apps/root-terminal';
import { displaySettings } from './components/apps/settings';
import { displayFirefox } from './components/apps/firefox';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutAli } from './components/apps/ali';
import { displayTerminalCalc } from './components/apps/calc';
import { displayMetasploit } from './components/apps/metasploit';
import { displayNmap } from './components/apps/nmap';
import { displayCrypt } from './components/apps/crypt';
import { displayCherrytree } from './components/apps/cherrytree';
import { displayVlc } from './components/apps/vlc';
import { displayGithub } from './components/apps/github';
import { displayNeofetch } from './components/apps/neofetch';
import { displayTracer } from './components/apps/packet-tracer';
import { displaySqlmap } from './components/apps/sqlmap';
import { displayDisqusComments } from './components/apps/messaging-app';
import { displayTextEditor } from './components/apps/editor';
import { displayWeather } from './components/apps/weather';
import { displayApache } from './components/apps/apache';
import { displayShodan } from './components/apps/shodan';
import { displayZoomEye } from './components/apps/zoom-eye';
import { displayExploitDatabase } from './components/apps/exploit-database';

const apps = [
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Flat-Remix-Blue-Dark/apps/qterminal.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "about-ali",
        title: "About Ali",
        icon: './themes/Flat-Remix-Blue-Dark/system/user-home.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutAli,
    },
    {
        id: "firefox",
        title: "Fire Fox",
        icon: './themes/Flat-Remix-Blue-Dark/apps/firefox.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayFirefox,
    },
    {
        id: "metasploit",
        title: "Metasploit",
        icon: './themes/Flat-Remix-Blue-Dark/apps/kali-metasploit-framework.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayMetasploit,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Flat-Remix-Blue-Dark/apps/chrome.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "root-terminal",
        title: "Root Terminal",
        icon: './themes/Flat-Remix-Blue-Dark/apps/root-terminal.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayRootTerminal,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Flat-Remix-Blue-Dark/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Flat-Remix-Blue-Dark/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Flat-Remix-Blue-Dark/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Flat-Remix-Blue-Dark/apps/settings.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Flat-Remix-Blue-Dark/system/user-trash-full.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Flat-Remix-Blue-Dark/apps/gedit.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "nmap",
        title: "Nmap",
        icon: './themes/Flat-Remix-Blue-Dark/apps/nmap.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayNmap,
    },
    {
        id: "crypt",
        title: "Crypt",
        icon: './themes/Flat-Remix-Blue-Dark/system/folder.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayCrypt,
    },
    {
        id: "cherrytree",
        title: "Cherrytree",
        icon: './themes/Flat-Remix-Blue-Dark/apps/cherrytree.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayCherrytree,
    },
    {
        id: "vlc",
        title: "Vlc",
        icon: './themes/Flat-Remix-Blue-Dark/apps/vlc.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayVlc,
    },
    {
        id: "github",
        title: "Github",
        icon: './themes/Flat-Remix-Blue-Dark/apps/github-desktop.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayGithub,
    },
    {
        id: "neofetch",
        title: "Neofetch",
        icon: './themes/Flat-Remix-Blue-Dark/apps/neofetch.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayNeofetch,
    },
    {
        id: "tracer",
        title: "Packet Tracer",
        icon: './themes/Flat-Remix-Blue-Dark/apps/packet tracer.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTracer,
    },
    {
        id: "sqlmap",
        title: "Sqlmap",
        icon: './themes/Flat-Remix-Blue-Dark/apps/sqlmap.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displaySqlmap,
    },
    {
        id: "message",
        title: "Message",
        icon: './themes/Flat-Remix-Blue-Dark/apps/messaging-app.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayDisqusComments,
    },
    {
        id: "weather",
        title: "Weather",
        icon: './themes/Flat-Remix-Blue-Dark/apps/weather-app.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayWeather,
    },
    {
        id: "editor",
        title: "Text-Editor",
        icon: './themes/Flat-Remix-Blue-Dark/apps/text-editor.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTextEditor,
    },
    {
        id: "apache",
        title: "Apache",
        icon: './themes/Flat-Remix-Blue-Dark/apps/kali-apache-users.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayApache,
    },
    {
        id: "shadon",
        title: "Shadon",
        icon: './themes/Flat-Remix-Blue-Dark/apps/shodan.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayShodan,
    },
    {
        id: "zoomeye",
        title: "ZoomEye",
        icon: './themes/Flat-Remix-Blue-Dark/apps/zoomeye.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayZoomEye,
    },
    {
        id: "exploit-database",
        title: "Exploit-Database",
        icon: './themes/Flat-Remix-Blue-Dark/apps/exploit-database.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayExploitDatabase,
    },
]

export default apps;