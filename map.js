function Tile (type) {
    this.type = type;
}

Tile.prototype.isWalkable = function (tile) {
        if (tile === "grass" || tile === "sand") {
            return true;
        }
        else {
            return false;
        }
}

function Map (width, height) {
    this.width = width;
    this.height = height;
    this.tiles = {
        for ()
}