import React from 'react';

type Props = {
  onClose: () => void;
};

const YoutubeDialog = ({ onClose }: Props) => {
  return <div onClick={onClose}>YoutubeDialog</div>;
};

export default YoutubeDialog;
