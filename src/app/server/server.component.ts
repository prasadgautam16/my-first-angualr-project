import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    private serverId : number = 1000;
    public serverStatus : string = "Online";
    public addServerFlag : boolean = false;
    public serverCreatedText : string = ""
    public serverName : string = "First Server";
    public isServerCreated : boolean = false;
    public serversCreated : any = [
        { serverName : "Server1", serverStatus : "Online", serverId: 1000 }, 
        { serverName : "Server2", serverStatus : "Offline", serverId: 1011 }
    ];

    getServerId() {
        return this.serverId;
    }

    onCreateServer() {
        this.isServerCreated = true;
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
        this.serverId = parseInt((Math.random() * 10000).toFixed());
        this.serversCreated.push({ serverName: this.serverName, serverStatus : this.serverStatus, serverId: this.serverId});
        this.serverCreatedText = "Server Created !!! Name of the newly created server is : " + this.serverName;
    }

    onUpdateServerName(event : Event) {
        // Explicit casting of input element
        
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    constructor() {
        setTimeout(() => {
            this.addServerFlag = true;
        }, 3000);

        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getBackGround(serverStatus) {
        return serverStatus === 'Online' ? 'palegreen' : 'tomato';
    }

}