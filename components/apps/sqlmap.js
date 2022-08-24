import React, { Component } from 'react'
import $ from 'jquery';

export class Sqlmap extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "root";
        this.prev_commands = [];
        this.commands_index = -1;
        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#terminal-body').empty();
        this.appendTerminalRow();
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;
        terminal.push(this.terminalRow(this.terminal_rows));
        this.setState({ terminal });
        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (
            <React.Fragment key={id}>
                <div className="flex w-full h-5">
                    <div className=" text-ubt-blue">┌──(ali㉿kali)-[{this.current_directory}] </div>                                                        
                     </div>
                    <div className="flex">
                    <div className=" text-ubt-blue">└─$ </div> 
                    <div className="p-1"> <pre>
'        ___                                                                     <br/>
'       __H__                                                                 <br/>
' ___ ___[.]_____ ___ ___  1.6.2#stable                                       <br/>
'|_ -| . [']     | .'| . |                                                    <br/>
'|___|_  [.]_|_|_|__,|  _|                                                    <br/>
'      |_|V...       |_|   https://sqlmap.org                                 <br/>
                                                                              <br/>
Usage: python3 sqlmap [options]                                               <br/>
                                                                              <br/>
Options:                                                                      <br/>
  -h, --help            Show basic help message and exit                      <br/>
  -hh                   Show advanced help message and exit                   <br/>
  --version             Show program's version number and exit                <br/>
  -v VERBOSE            Verbosity level: 0-6 (default 1)                      <br/>
                                                                              <br/>
  Target:                                                                     <br/>
    At least one of these options has to be provided to define the            <br/>
    target(s)                                                                 <br/>
                                                                              <br/>
    -u URL, --url=URL   Target URL (e.g. "http://www.site.com/vuln.php?id=1") <br/>
    -g GOOGLEDORK       Process Google dork results as target URLs            <br/>
                                                                              <br/>
  Request:                                                                    <br/>
    These options can be used to specify how to connect to the target URL     <br/>
                                                                              <br/>
    --data=DATA         Data string to be sent through POST (e.g. "id=1")     <br/>
    --cookie=COOKIE     HTTP Cookie header value (e.g. "PHPSESSID=a8d127e..") <br/>
    --random-agent      Use randomly selected HTTP User-Agent header value    <br/>
    --proxy=PROXY       Use a proxy to connect to the target URL              <br/>
    --tor               Use Tor anonymity network                             <br/>
    --check-tor         Check to see if Tor is used properly                  <br/>
                                                                              <br/>
  Injection:                                                                  <br/>
    These options can be used to specify which parameters to test for,        <br/>
    provide custom injection payloads and optional tampering scripts          <br/>
                                                                              <br/>
    -p TESTPARAMETER    Testable parameter(s)                                 <br/>
    --dbms=DBMS         Force back-end DBMS to provided value                 <br/>
                                                                              <br/>
  Detection:                                                                  <br/>
    These options can be used to customize the detection phase                <br/>
                                                                              <br/>
    --level=LEVEL       Level of tests to perform (1-5, default 1)            <br/>
    --risk=RISK         Risk of tests to perform (1-3, default 1)             <br/>
                                                                              <br/>
  Techniques:                                                                 <br/>
    These options can be used to tweak testing of specific SQL injection      <br/>
    techniques                                                                <br/>
                                                                              <br/>
    --technique=TECH..  SQL injection techniques to use (default "BEUSTQ")    <br/>
                                                                              <br/>
  Enumeration:                                                                <br/>
    These options can be used to enumerate the back-end database              <br/>
    management system information, structure and data contained in the        <br/>
    tables                                                                    <br/>
                                                                              <br/>
    -a, --all           Retrieve everything                                   <br/>
    -b, --banner        Retrieve DBMS banner                                  <br/>
    --current-user      Retrieve DBMS current user                            <br/>
    --current-db        Retrieve DBMS current database                        <br/>
    --passwords         Enumerate DBMS users password hashes                  <br/>
    --tables            Enumerate DBMS database tables                        <br/>
    --columns           Enumerate DBMS database table columns                 <br/>
    --schema            Enumerate DBMS schema                                 <br/>
    --dump              Dump DBMS database table entries                      <br/>
    --dump-all          Dump all DBMS databases tables entries                <br/>
    -D DB               DBMS database to enumerate                            <br/>
    -T TBL              DBMS database table(s) to enumerate                   <br/>
    -C COL              DBMS database table column(s) to enumerate            <br/>
                                                                              <br/>
  Operating system access:                                                    <br/>
    These options can be used to access the back-end database management      <br/>
    system underlying operating system                                        <br/>
                                                                              <br/>
    --os-shell          Prompt for an interactive operating system shell      <br/>
    --os-pwn            Prompt for an OOB shell, Meterpreter or VNC           <br/>
                                                                              <br/>
  General:                                                                    <br/>
    These options can be used to set some general working parameters          <br/>
                                                                              <br/>
    --batch             Never ask for user input, use the default behavior    <br/>
    --flush-session     Flush session files for current target                <br/>
                                                                              <br/>
  Miscellaneous:                                                              <br/>
    These options do not fit into any other category                          <br/>
                                                                              <br/>
    --wizard            Simple wizard interface for beginner users            <br/>
                                                                              <br/>
[!] to see full list of options run with '-hh'                                <br/>

 </pre></div>

                    </div>
                    <iframe src="https://suip.biz/?act=sqlmap" className="h-full w-full bg-ub-cool-grey"></iframe>
            </React.Fragment>
        );
        }

    startCursor = (id) => {
        clearInterval(this.cursor);        
        }
        render() {
            return (
                <div className="h-full w-full bg-ub-grey text-white text-sm font-bold" id="terminal-body">
                    {
                        this.state.terminal
                    }
                </div>
            )
        }
    


}
export default Sqlmap

export const displaySqlmap = () => { 
    return <Sqlmap> </Sqlmap>;
}
