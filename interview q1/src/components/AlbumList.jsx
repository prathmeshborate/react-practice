import React from 'react';

function AlbumList({ data, onAlbumClick }) {
    const albums = [...new Set(data.map(item => item.albumId))];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <ul className="list-none">
                {albums.map(albumId => (
                    <li key={albumId} className="mb-2">
                        <button
                            onClick={() => onAlbumClick(albumId)}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Album {albumId}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;
