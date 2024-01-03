const useColor = () => {
    const colorsArr = [
        "bg-purple-200",
        "bg-blue-200",
        "bg-yellow-200",
        "bg-rose-200",
        "bg-green-300",
        "bg-gray-200",
        "bg-lime-300",
        "bg-indigo-300",
        "bg-pink-300",
    ];

    const color = colorsArr[Math.floor(Math.random() * colorsArr.length)];

    return color;
};

export { useColor };
