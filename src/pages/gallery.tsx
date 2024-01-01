import React, {useState} from 'react';
import Image from "next/image";


/*
https://ibb.co/ScGtmXK: https://i.ibb.co/MfQc1DR/Hotel-With-Eureka-And-Paraducks.jpg
https://ibb.co/VxZzwKd: https://i.ibb.co/0KS6swk/At-SYDwith-Eureka-And-Paraducks.jpg
https://ibb.co/F34rJsN: https://i.ibb.co/tKpGcZk/Winning-Inspire.jpg
https://ibb.co/ZGcRfsq: https://i.ibb.co/ydgmNTH/After-Judges-Pres.jpg
https://ibb.co/WkhpXNZ: https://i.ibb.co/Cbcsypg/Convo-With-Barker.jpg
https://ibb.co/fXGfHxQ: https://i.ibb.co/Gd3yR5F/Matrix-Pit-Setup.jpg
 */

const Gallery = () => {
    const data = [
        {
            link: "add link here",
            image: "https://i.ibb.co/MfQc1DR/Hotel-With-Eureka-And-Paraducks.jpg",
            comment: "Team Matrix with FTC Teams Eureka and Paraducks at the hotel in Sydney, Australia.",
        },
        {
            link: "add link here",
            image: "https://i.ibb.co/0KS6swk/At-SYDwith-Eureka-And-Paraducks.jpg",
            comment: "Team Matrix with FTC Teams Eureka and Paraducks at the Sydney International Airport.",
        },
        {
            link: "add link here",
            image: "https://i.ibb.co/tKpGcZk/Winning-Inspire.jpg",
            comment: "Team Matrix winning the Raman Division Inspire award at the FTC India National Championship 2022-2023.",
        },
        {
            link: "add link here",
            image: "https://i.ibb.co/ydgmNTH/After-Judges-Pres.jpg",
            comment: "Team Matrix after the judges presentation at the FTC India National Championship 2022-2023.",
        },
        {
            link: "add link here",
            image: "https://i.ibb.co/Cbcsypg/Convo-With-Barker.jpg",
            comment: "Team Matrix having a conversation with Mr. Jesser Becker and Ms. Diane Becker of the Barker Institute in Sydney, Australia.",
        },
        {
            link: "add link here",
            image: "https://i.ibb.co/Gd3yR5F/Matrix-Pit-Setup.jpg",
            comment: "Team Matrix's setting up their pit at the FTC India National Championship 2022-2023.",
        },
    ];
    
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalComment, setModalComment] = useState('');
    
    const handleImageClick = (image :string, comment :string) => {
        setShowModal(true);
        setModalImage(image);
        setModalComment(comment);
    };
    
    const handleModalClose = () => {
        setShowModal(false);
    };
    
    return (
        <>
            <div className="">
                <div className="p-6 container mx-auto">
                    <div className="py-2">
                        <h1 className="text-center text-4xl">Gallery</h1>
                    </div>
                    <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {data.map((x) => {
                            return (
                                <>
                                    <article
                                        key={x.comment}
                                        className="p-6 mb-6 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                                        onClick={() => handleImageClick(x.image, x.comment)}
                                    >
                                        <div className="relative mb-4 rounded-2xl">
                                            <Image
                                                width={400}
                                                height={400}
                                                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src={x.image}
                                                alt=""
                                            />
                                            <h1
                                                className="flex justify-center items-center bg-matrixPurple bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                                                rel="noopener noreferrer"
                                            >
                                                Open
                                            </h1>
                                        </div>
                                        <h3 className="font-medium text-xl leading-8">
                                            <p
                                                className="block relative group-hover:text-matrixPurple transition-colors duration-200"
                                            >
                                                <span dangerouslySetInnerHTML={{__html: x.comment}}/>
                                            </p>
                                        </h3>
                                    </article>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            {showModal && (
                <div className="fixed m-2 inset-0 z-40 overflow-y-auto flex items-center justify-center">
                    {/* Modal content */}
                    <div className="fixed inset-0 transition-opacity" aria-hidden={!showModal}>
                        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden={!showModal} />
                    </div>
                    
                    {/* This element is to trap focus inside of the modal */}
                    <div className="relative sm:w-full sm:max-w-md" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <Image
                                    src={modalImage}
                                    blurDataURL={modalImage}
                                    alt={modalComment}
                                    width={600} // Adjust image size as needed
                                    height={400}
                                    className="w-full object-cover"
                                />
                                <div className="mt-4 text-black">
                                    <p>
                                        {modalComment}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;