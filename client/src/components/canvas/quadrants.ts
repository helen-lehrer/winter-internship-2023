export const generateMapQuadrants = () => {
  const randomNumberSelector = () => {
    return Math.floor(Math.random() * 3);
  };

  return {
    i: randomNumberSelector(),
    ii: randomNumberSelector(),
    iii: randomNumberSelector(),
    iv: randomNumberSelector(),
  };
};

export const quadrants = [
  [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "s", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "."],
    ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "."],
    ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "."],
    ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ],
  [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "s", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
    ["-", ".", "-", ".", ".", ".", ".", ".", ".", ".", "-"],
    ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
    ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "."],
    ["-", ".", ".", ".", "-", "-", ".", "-", ".", ".", "."],
  ],
  [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "s", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["-", ".", ".", "-", "-", "-", "-", "-", ".", ".", "-"],
    ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "-"],
    ["-", ".", "-", "-", "-", "-", "-", "-", "-", ".", "-"],
    ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["-", ".", "-", "-", ".", "-", "-", ".", "-", "-", "."],
  ]
]
