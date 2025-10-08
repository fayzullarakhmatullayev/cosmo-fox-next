import React from 'react';

type Props = {
  onClose: () => void;
};

const YoutubeDialog = ({ onClose }: Props) => {
  return (
    <div className="dialog">
      <div className="dialog__overlay" onClick={onClose}></div>
      <div className="dialog__blog">
        <div className="dialog__close" onClick={onClose}>
          &times;
        </div>
        <iframe
          src="https://www.youtube.com/embed/NJpAejZ_f4o"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeDialog;
