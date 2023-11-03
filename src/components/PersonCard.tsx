import React from 'react';

type props = {
    subteam :string,
    name :string,
    image :string,
}

const PersonCard = (props :props) => {
    return (
        <div className={"hover:scale-110 hover:cursor-pointer transition duration-150 delay-0 bg-gray-800 rounded-xl h-72 w-52 flex flex-col py-5 px-2 shadow-2xl items-center"}>
            <img className="w-32 h-32 border-8 border-matrixPurple rounded-full object-cover shadow-2xl" src={props.image} alt={props.name} />
            <div className={"flex flex-col items-center mt-10"}>
                <h1 className={"text-xl font-bold"}>{props.name}</h1>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <code className={"bg-gray-900 rounded-xl p-1 mt-2"}>// {props.subteam}</code>
            </div>
        </div>
    );
};

export default PersonCard;