namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let healthy of sprites.allOfKind(SpriteKind.Player)) {
        healthy.setPosition(Math.randomRange(3, scene.screenWidth()), Math.randomRange(3, scene.screenHeight()))
        healthy.setVelocity(50, 50)
        healthy.setFlag(SpriteFlag.BounceOnWall, true)
        infected.setPosition(Math.randomRange(3, scene.screenWidth()), Math.randomRange(3, scene.screenHeight()))
        infected.setVelocity(50, 50)
        infected.setFlag(SpriteFlag.BounceOnWall, true)
    }
})
let infected: Sprite = null
let healthy: Sprite = null
for (let index = 0; index < 10; index++) {
    healthy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
}
tiles.setTilemap(tiles.createTilemap(
            hex`10001000010606060606060606030000000000000508080808080808080a0000000000000508080808080808080a0000000000000508080808080808080a0000000000000508080808080808080a0000000000000508080808080808080a00000000000004090909090909090902000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath6],
            TileScale.Sixteen
        ))
infected = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
game.onUpdate(function () {
    if (infected.overlapsWith(healthy)) {
        healthy.destroy()
        healthy.vx += 100
    }
})
