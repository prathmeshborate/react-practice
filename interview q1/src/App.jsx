import React, { useState, useEffect } from 'react';
import AlbumList from './components/AlbumList';
import ThumbnailList from './components/ThumbnailList';
import Modal from './components/Modal';

function App() {
    const [data, setData] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleAlbumClick = (albumId) => {
        setSelectedAlbum(albumId);
        setSelectedImage(null); // Reset selected image when switching albums
    };

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-100">
            <div className="w-full block">
                <main>
                    {selectedAlbum ? (
                        <ThumbnailList
                            albumId={selectedAlbum}
                            data={data}
                            onThumbnailClick={handleThumbnailClick}
                        />
                    ) : (
                        <AlbumList data={data} onAlbumClick={handleAlbumClick} />
                    )}
                    {selectedImage && (
                        <Modal image={selectedImage} onClose={handleCloseModal} />
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
