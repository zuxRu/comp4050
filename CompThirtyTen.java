
public class CompThirtyTen {
    // base is box i and j co-ordinate to which width and height are relative
    // height and width can be negative
    // width and height start with at zero for only a single box
    public int canMoveRight(Box[][] boxes, int baseX, int baseY, int width, int height) {
        int newWidth = width + 1;
        int sum = 0;
        if ((baseX + newWidth) < boxes.length && (baseX + newWidth) > 0) {
            for (int i = 0; i <= height; i++) {
                if (boxes[baseX + newWidth][baseY + i].squareAssigned == -1) {
                    sum += boxes[baseX + newWidth][baseY + i].value;
                } else {
                    return -1;
                }
            }
            return sum;
        } else {
            return -1;
        }
    }

    public int canMoveLeft(Box[][] boxes, int baseX, int baseY, int width, int height) {
        int newWidth = width - 1;
        int sum = 0;
        if ((baseX + newWidth) < boxes.length && (baseX + newWidth) > 0) {
            for (int i = 0; i <= height; i++) {
                if (boxes[baseX + newWidth][baseY + i].squareAssigned == -1) {
                    sum += boxes[baseX + newWidth][baseY + i].value;
                } else {
                    return -1;
                }
            }
            return sum;
        } else {
            return -1;
        }

    }

    public int canMoveUp(Box[][] boxes, int baseX, int baseY, int width, int height) {
        int newHeight = height + 1;
        int sum = 0;
        if ((baseY + newHeight) < boxes.length && (baseY + newHeight) > 0) {
            for (int i = 0; i <= height; i++) {
                if (boxes[baseX + i][baseY + newHeight].squareAssigned == -1) {
                    sum += boxes[baseX + i][baseY + newHeight].value;
                } else {
                    return -1;
                }
            }
            return sum;
        } else {
            return -1;
        }

    }

    public int canMoveDown(Box[][] boxes, int baseX, int baseY, int width, int height) {
        int newHeight = height + 1;
        int sum = 0;
        if ((baseY + newHeight) < boxes.length && (baseY + newHeight) > 0) {
            for (int i = 0; i <= height; i++) {
                if (boxes[baseX + i][baseY + newHeight].squareAssigned == -1) {
                    sum += boxes[baseX + i][baseY + newHeight].value;
                } else {
                    return -1;
                }
            }
            return sum;
        } else {
            return -1;
        }

    }

    public void mainAlgo(int[][] grid, int nBoxes) {
        int runningTotal = 0;
        int sumRight = 0;
        int sumLeft = 0;
        int sumUp = 0;
        int sumDown = 0;
        Bin[] nBins = new Bin[nBoxes];
        Box[][] gridBox = new Box[grid.length][grid[0].length];
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                gridBox[i][j] = new Box(grid[i][j]);
                runningTotal += gridBox[i][j].value;
            }
        }

        int target = runningTotal / nBoxes;

        for (int i = 0; i < nBins.length; i++) {
            nBins[i] = new Bin(i);
            if(gridBox[0][0].squareAssigned == -1){
                nBins[i].baseX = 0;
                nBins[i].baseY = 0;

                while(nBins[])
            }
        }

    }
}
