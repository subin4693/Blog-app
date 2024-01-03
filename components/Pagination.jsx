import React from "react";

const Pagination = () => {
    return (
        <div className="flex_between text-xs">
            <button className="bg-red-500 text-white py-2 rounded-sm px-5">
                Prev
            </button>
            <button className="bg-red-500 text-white py-2 rounded-sm px-5">
                Next
            </button>
        </div>
    );
};

export default Pagination;
