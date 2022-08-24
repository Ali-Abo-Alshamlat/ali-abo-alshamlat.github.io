import React, { Component } from 'react'
import $ from 'jquery';

export class Neofetch extends Component {
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
        ' ..............                       ali@kali     <br/>
        '       ..,;:ccc,.                     --------     <br/>
        '         ......''';lxO.                            <br/>
        '  .....''''..........,:ld;                         <br/>
        '             .';;;:::;,,.x,                        <br/>
        '    ..'''.          0Xxoc:,.  ...                  <br/>
        ' ....           ,ONkc;,;cokOdc',.                  <br/>
        '.            OMo           ':ddo.                  <br/>
        '            dMc               :OO;                 <br/>
        '            0M.                 .:o.               <br/>
        '            ;Wd                                    <br/>
        '             ;XO,                                  <br/>
        '               ,d0Odlc;,..                         <br/>
        '                   ..',;:cdOOd::,.                 <br/>
        '                            .:d;.':;.              <br/>
        '                               'd,  .'             <br/>
        '                                 ;l   ..           <br/>
        '                                  .o               <br/>
        '                                    c              <br/>
        '                                    .'             <br/>
        '                                     .             <br/>
 </pre></div>

                    </div>
               
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
export default Neofetch

export const displayNeofetch = () => { 
    return <Neofetch> </Neofetch>;
}
