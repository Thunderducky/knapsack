const colors = {
  BLUE: `#2222FF10`,
  RED: `#FF222210`
}
const tree = {
  left: {
    chance: 0.4,
    left: {
      chance: 0.8
    },
    right: {
      chance: 0.2
    }
  },
  right: {
    chance: 0.6,
    left: {
      chance: 1,
      left: {
        chance: 0.2,
      },
      right: {
        chance: 0.8
      }
    },
    right: {
      chance: 0
    }
  }
}

async function start(){
  const res = await fetch("/data")
  const data = await res.json();
  console.log(data);
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  const width = 500;
  const height = 500;
  const steps = 3;
  ctx.fillRect(0, 0, width, height);
  const sliceHeight = height/steps

  drawLevel(ctx, tree, {top: -sliceHeight, left: 0, width, height: 0}, sliceHeight)

}
start();


function drawLevel(ctx, node, parentRect, sliceHeight){
  const blueRect = {
    left: parentRect.left,
    top: parentRect.top + sliceHeight,
    height: sliceHeight,
    width: parentRect.width * node.left.chance,
  }
  ctx.fillStyle = colors.BLUE;
  ctx.fillRect(blueRect.left, blueRect.top, blueRect.width, blueRect.height);

  const redRect = {
    left: blueRect.left + blueRect.width,
    top: parentRect.top + sliceHeight,
    height: sliceHeight,
    width: parentRect.width * node.right.chance,
  }
  ctx.fillStyle = colors.RED;
  ctx.fillRect(redRect.left, redRect.top, redRect.width, redRect.height);

  if(node.left.left){
    drawLevel(ctx, node.left, blueRect, sliceHeight);
  }
  if(node.right.right){
    drawLevel(ctx, node.right, redRect, sliceHeight);
  }

}
