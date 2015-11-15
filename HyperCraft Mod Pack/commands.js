// extra commands - part of HyperCraft ModPack v1.0

function procCmd(command) {
    var cmd = command.split("");
    if(cmd[0] == "heal") {
        Player.setHealth(20);
        clientMessage(ChatColor.GREEN + "You have been healed!");
        break;
    }

    if(cmd[0] == "kill") {
        Player.setHealth(0);
        clientMessage(ChatColor.RED + "Oh no! You died.");
    }
}

// Not sure if this works, just trying another way of setting commands

function proCmd(command) {
    var p = command.split(" ");
    var command = p[0];
    switch(command) {
        case 'get': {
            if(!p[1] == 'weapons') {
                addItemInventory(841, 1);
                addItemInventory(842, 1);
                addItemInventory(843, 1);
                clientMessage(ChatColor.GRAY + "Weapons have been added to your inventory!");
                break;
            }
            if(!p[1] == 'food') {
                // still working on food section

            }
        }

    }
}

