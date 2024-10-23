import React from 'react';

function ThumbnailList({ albumId, data, onThumbnailClick }) {
    const images = data.filter(item => item.albumId === albumId);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Album {albumId}</h2>
            <div className="grid grid-cols-3 gap-4">
                {images.map(image => (
                    <div key={image.id} className="cursor-pointer">
                        <img
                            src={image.thumbnailUrl}
                            alt={image.title}
                            className="rounded-lg"
                            onClick={() => onThumbnailClick(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThumbnailList;
