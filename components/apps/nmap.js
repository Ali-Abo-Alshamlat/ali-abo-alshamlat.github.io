import React, { Component } from 'react'
import $ from 'jquery';

export class Nmap extends Component {
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
                    <div> <pre>                                              
        'Usage: nmap [Scan Type(s)] [Options] ("target specification")              <br/>
        'TARGET SPECIFICATION:                                                      <br/>
        '  Can pass hostnames, IP addresses, networks, etc.                         <br/>
        '  Ex: scanme.nmap.org, microsoft.com/24, 192.168.0.1; 10.0.0-255.1-254     <br/>
        '  -iL ('inputfilename'): Input from list of hosts/networks                 <br/>
        '  -iR (num hosts): Choose random targets                                   <br/>
        '  --exclude (host1[,host2][,host3],...): Exclude hosts/networks            <br/>
        '  --excludefile (exclude_file): Exclude list from file                     <br/>
        'HOST DISCOVERY:                                                            <br/>
        '  -sL: List Scan - simply list targets to scan                             <br/>
        '  -sn: Ping Scan - disable port scan                                       <br/>
        '  -Pn: Treat all hosts as online -- skip host discovery                    <br/>
        '  -PS/PA/PU/PY[portlist]: TCP SYN/ACK, UDP or SCTP discovery to given ports<br/>
        '  -PE/PP/PM: ICMP echo, timestamp, and netmask request discovery probes    <br/>
        '  -PO[protocol list]: IP Protocol Ping                                     <br/>
        '  -n/-R: Never do DNS resolution/Always resolve [default: sometimes]       <br/>
        '  --dns-servers (serv1[,serv2],...): Specify custom DNS servers            <br/>
        '  --system-dns: Use OS's DNS resolver                                      <br/>
        '  --traceroute: Trace hop path to each host                                <br/>
        'SCAN TECHNIQUES:                                                           <br/>
        '  -sS/sT/sA/sW/sM: TCP SYN/Connect()/ACK/Window/Maimon scans               <br/>
        '  -sU: UDP Scan                                                            <br/>
        '  -sN/sF/sX: TCP Null, FIN, and Xmas scans                                 <br/>
        '  --scanflags (flags): Customize TCP scan flags                            <br/>
        '  -sI (zombie host[:probeport]): Idle scan                                 <br/>
        '  -sY/sZ: SCTP INIT/COOKIE-ECHO scans                                      <br/>
        '  -sO: IP protocol scan                                                    <br/>
        '  -b (FTP relay host): FTP bounce scan                                     <br/>
        'PORT SPECIFICATION AND SCAN ORDER:                                         <br/>
        '  -p (port ranges): Only scan specified ports                              <br/>
        '    Ex: -p22; -p1-65535; -p U:53,111,137,T:21-25,80,139,8080,S:9           <br/>
        '  --exclude-ports (port ranges): Exclude the specified ports from scanning <br/>
        '  -F: Fast mode - Scan fewer ports than the default scan                   <br/>
        '  -r: Scan ports consecutively - don't randomize                           <br/>
        '  --top-ports (number): Scan (number) most common ports                    <br/>
        '  --port-ratio (ratio): Scan ports more common than (ratio)                <br/>
        'SERVICE/VERSION DETECTION:                                                 <br/>
        '  -sV: Probe open ports to determine service/version info                  <br/>
        '  --version-intensity (level): Set from 0 (light) to 9 (try all probes)    <br/>
        '  --version-light: Limit to most likely probes (intensity 2)               <br/>
        '  --version-all: Try every single probe (intensity 9)                      <br/>
        '  --version-trace: Show detailed version scan activity (for debugging)     <br/>
        'SCRIPT SCAN:                                                               <br/>
        '  -sC: equivalent to --script=default                                      <br/>
        '  --script=(Lua scripts): (Lua scripts) is a comma separated list of       <br/>
        '           directories, script-files or script-categories                  <br/>
        '  --script-args=(n1=v1,[n2=v2,...]): provide arguments to scripts          <br/>
        '  --script-args-file=filename: provide NSE script args in a file           <br/>
        '  --script-trace: Show all data sent and received                          <br/>
        '  --script-updatedb: Update the script database.                           <br/>
        '  --script-help=(Lua scripts): Show help about scripts.                    <br/>
        '                (Lua scripts) is a comma-separated list of script-files or <br/>
        'script-categories.                                                         <br/>
        'OS DETECTION:                                                              <br/>
        '  -O: Enable OS detection                                                  <br/>
        '  --osscan-limit: Limit OS detection to promising targets                  <br/>
        '  --osscan-guess: Guess OS more aggressively                               <br/>
        'TIMING AND PERFORMANCE:                                                    <br/>
        '  Options which take (time) are in seconds, or append 'ms' (milliseconds), <br/>
        '  's' (seconds), 'm' (minutes), or 'h' (hours) to the value (e.g. 30m).    <br/>
        '  -T(0-5): Set timing template (higher is faster)                          <br/>
        '  --min-hostgroup/max-hostgroup (size): Parallel host scan group sizes     <br/>
        '  --min-parallelism/max-parallelism (numprobes): Probe parallelization     <br/>
        '  --min-rtt-timeout/max-rtt-timeout/initial-rtt-timeout (time): Specifies  <br/>
        '  probe round trip time.                                                   <br/>
        '  --max-retries (tries): Caps number of port scan probe retransmissions.   <br/>
        '  --host-timeout (time): Give up on target after this long                 <br/>
        '  --scan-delay/--max-scan-delay (time): Adjust delay between probes        <br/>
        '  --min-rate (number): Send packets no slower than (number) per second     <br/>
        '  --max-rate (number): Send packets no faster than (number) per second     <br/>
        'FIREWALL/IDS EVASION AND SPOOFING:                                         <br/>
        '  -f; --mtu (val): fragment packets (optionally w/given MTU)               <br/>
        '  -D (decoy1,decoy2[,ME],...): Cloak a scan with decoys                    <br/>
        '  -S (IP_Address): Spoof source address                                    <br/>
        '  -e (iface): Use specified interface                                      <br/>
        '  -g/--source-port (portnum): Use given port number                        <br/>
        '  --proxies (url1,[url2],...): Relay connection through HTTP/SOCKS4 proxies<br/>
        '  --data (hex string): Append a custom payload to sent packets             <br/>
        '  --data-string (string): Append a custom ASCII string to sent packets     <br/>
        '  --data-length (num): Append random data to sent packets                  <br/>
        '  --ip-options (options): Send packets with specified ip options           <br/>
        '  --ttl (val): Set IP time-to-live field                                   <br/>
        '  --spoof-mac (mac address/prefix/vendor name): Spoof your MAC address     <br/>
        '  --badsum: Send packets with a bogus TCP/UDP/SCTP checksum                <br/>
        'OUTPUT:                                                                    <br/>
        '  -oN/-oX/-oS/-oG (file): Output scan in normal, XML, s|(rIpt kIddi3,      <br/>
        '   and Grepable format, respectively, to the given filename.               <br/>
        '  -oA (basename): Output in the three major formats at once                <br/>
        '  -v: Increase verbosity level (use -vv or more for greater effect)        <br/>
        '  -d: Increase debugging level (use -dd or more for greater effect)        <br/>
        '  --reason: Display the reason a port is in a particular state             <br/>
        '  --open: Only show open (or possibly open) ports                          <br/>
        '  --packet-trace: Show all packets sent and received                       <br/>
        '  --iflist: Print host interfaces and routes (for debugging)               <br/>
        '  --append-output: Append to rather than clobber specified output files    <br/>
        '  --resume (filename): Resume an aborted scan                              <br/>
        '  --noninteractive: Disable runtime interactions via keyboard              <br/>
        '  --stylesheet (path/URL): XSL stylesheet to transform XML output to HTML  <br/>
        '  --webxml: Reference stylesheet from Nmap.Org for more portable XML       <br/>
        '  --no-stylesheet: Prevent associating of XSL stylesheet w/XML output      <br/>
        'MISC:                                                                      <br/>
        '  -6: Enable IPv6 scanning                                                 <br/>
        '  -A: Enable OS detection,version detection,script scanning,and traceroute <br/>
        '  --datadir (dirname): Specify custom Nmap data file location              <br/>
        '  --send-eth/--send-ip: Send using raw ethernet frames or IP packets       <br/>
        '  --privileged: Assume that the user is fully privileged                   <br/>
        '  --unprivileged: Assume the user lacks raw socket privileges              <br/>
        '  -V: Print version number                                                 <br/>
        '  -h: Print this help summary page.                                        <br/>
        'EXAMPLES:                                                                  <br/>
        '  nmap -v -A scanme.nmap.org                                               <br/>
        '  nmap -v -sn 192.168.0.0/16 10.0.0.0/8                                    <br/>
        '  nmap -v -iR 10000 -Pn -p 80                                              <br/>
        'SEE THE MAN PAGE (https://nmap.org/book/man.html) FOR MORE OPTIONS AND EXAMPLES

  </pre> </div>
             </div>
                <iframe src="https://nmap.online/" frameBorder="0" className="h-full w-full"></iframe>
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
export default Nmap

export const displayNmap = () => { 
    return <Nmap> </Nmap>;
}
