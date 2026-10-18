import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../app/feature/collectionSlice";

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id));
    };

    return (
        <div>
            <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">

                <a target="_blank" className="h-full" href={item.url}>

                    {item.type === "photo" ? (
                        <img
                            className="h-full w-full object-cover object-center"
                            src={item.src}
                            alt=""
                        />
                    ) : ""}

                    {item.type === "video" ? (
                        <video
                            className="h-full w-full object-cover object-center"
                            autoPlay
                            loop
                            muted
                            src={item.src}
                        ></video>
                    ) : ""}

                    {item.type === "gif" ? (
                        <img
                            className="h-full w-full object-cover object-center"
                            src={item.src}
                            alt=""
                        />
                    ) : ""}

                </a>

                <div
                    id="bottom"
                    className="w-full flex justify-between items-center px-4 py-5 gap-3 text-white absolute bottom-0"
                >

                    <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
                        {item.title}
                    </h2>

                    <button
                        onClick={() => {
                            removeFromCollection(item);
                        }}
                        className="bg-pink-600 active:scale-95 text-white rounded px-3 py-2 font-medium cursor-pointer"
                    >
                        Remove
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CollectionCard;