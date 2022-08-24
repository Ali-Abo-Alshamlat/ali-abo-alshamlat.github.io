import React, { Component } from 'react'
import $ from 'jquery';

export class Metasploit extends Component {
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
        '                ########                  #     <br/>
        '            #################            #       <br/>
        '          ######################        #         <br/>
        '        #########################      #           <br/>
        '       ############################                <br/>
        '      ##############################               <br/>
        '      ###############################              <br/>
        '     ###############################               <br/>
        '     ##############################                <br/>
        '                     #    ########   #             <br/>
        '        ##        ###        ####   ##             <br/>
        '                             ###   ###             <br/>
        '                           ####   ###              <br/>
        '      ####          ##########   ####              <br/>
        '      #######################   ####               <br/>
        '        ####################   ####                <br/>
        '         ##################  ####                  <br/>
        '           ############      ##                    <br/>
        '              ########        ###                  <br/>
        '             #########        #####                <br/>
        '           ############      ######                <br/>
        '          ########      #########                  <br/>
        '            #####       ########                   <br/>
        '              ###       #########                  <br/>
        '             ######    ############                <br/>
        '            #######################                <br/>
        '            #   #   ###  #   #   ##                <br/>
        '            ########################               <br/>
        '             ##     ##   ##     ##                 <br/>
        '                   https://metasploit.com          <br/>
                                                            <br/>
                                                            <br/>
       =[ metasploit v6.1.31-dev                          ] <br/>
+ -- --=[ 2201 exploits - 1166 auxiliary - 395 post       ] <br/>
+ -- --=[ 596 payloads - 45 encoders - 11 nops            ] <br/>
+ -- --=[ 9 evasion                                       ] <br/>
<br/>
Metasploit tip: When in a module, use back to go            <br/>
back to the top level prompt                                <br/>
<br/>
msf6  </pre> </div>

                    </div>
               
            </React.Fragment>
        );
        }

    startCursor = (id) => {
        clearInterval(this.cursor);        
        }
        render() {
            return (
                <div className="h-full w-full bg-ub-grey-500 text-white text-sm font-bold" id="terminal-body">
                    {
                        this.state.terminal
                    }
                </div>
            )
        }
    


}
export default Metasploit

export const displayMetasploit = () => { 
    return <Metasploit> </Metasploit>;
}
