// Declare missing types and functions
declare function RegisterScript(script: any): void;

declare class EntitySystem {
    static GetPlayersList(): Array<Player>;
}

declare class Player {
    GetPlayerID(): number;
    GetName(): string;
}

declare class Log {
    static Write(message?: any, ...optionalParams: any[]): void;
}

// Your script code
declare interface OnChatMessageObject {
    sourcePlayerID: number;
    channelType: number;
    messageText: string;
}

RegisterScript({
    OnChatMessage: (obj: OnChatMessageObject) => {
        const message = obj.messageText;
        const playerId = obj.sourcePlayerID;

        const players = EntitySystem.GetPlayersList(); // Get the list of players
        const player = players.find(p => p.GetPlayerID() === playerId); // Find the player by ID
        const playerName = player ? player.GetName() : `Player ${playerId}`; // Get the player's name or use a fallback

        // Log the message to the console using Log.Write
        Log.Write(`${playerName}: ${message}`);

        return true; // Continue handling the chat message
    }
});
