//Copyright (c) HyperCraft Network 2015

//Inventory
Player.addItemCreativeInv(841, 1, 0);
Player.addItemCreativeInv(842, 1, 0);
Player.addItemCreativeInv(843, 1, 0);
addItemInventory(841,1);
addItemInventory(842,1);
addItemInventory(843,1);
//Items
ModPE.setItem(841, "katana", 0, "The Katana", 1);
ModPE.setItem(842, "lava_sword", 0, "Lava Sword", 1);
ModPE.setItem(843, "troll_sword", 0, "Troll Sword", 1);
//Craft Recipes
Item.addCraftRecipe(841, 1, 0 [352, 1, 0, 49, 1, 0, 265, 1, 0]);
Item.addCraftRecipe(842, 1, 0 [352, 1, 0, 325, 1, 0, 266, 1, 0]);
//Sword Powers
if (getCarriedItem() == 841) {
    Entity.setHealth(victim, 4);
    Entity.setSneaking(victim, true);
}
if (getCarriedItem() == 842) {
    Entity.setFireTicks(victim, 10);
}
if (getCarriedItem() == 843) {
    Entity.setNameTag(victim, "Noob");
}
function attackHook(attacker, victim){
    Level.explode(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1);
    
//Extra
function newLevel() {
    clientMessage(ChatColor.BLUE+"More Weapons by "+ChatColor.GOLD+"@HCMCPE"+ChatColor.BLUE+" Version 1.0");
}
function procCmd(command) {
    var cmd = command.split("");
    if(cmd[0] == "weapon"){
        Player.addItemInventory(841, 1, 0);
    }
}
//A heal command to gain back your health :)
function procCmd(command) {
    var cmd = command.split("");
    if(cmd[0] == "heal"){
        Player.setHealth(20);
    }
}
        


