"use client";

import { Song } from '@/types';
import LikeButton from './LikeButton';
import MediaItem from './MediaItem';
import Slider from './Slider';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import usePlayer from '@/hooks/usePlayer';
import { useState } from 'react';

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {

  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 h-full'>
      <div className='flex w-full justify-start'>
        <div className='flex item-center gap-x-4'>
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className='flex md:hidden col-auto justify-end items-center'>
        <div className='h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer'>
          <Icon size={30} className='text-black' />
        </div>
      </div>

      <div className='hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6'>
        <AiFillStepBackward size={30} onClick={() => {}} className='text-neutral-400 cursor-pointer hover:text-white transition' />
        <div 
            // onClick={handlePlay} 
            className="
              flex 
              items-center 
              justify-center
              h-10
              w-10 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
          >
            <Icon size={30} className="text-black" />
          </div>

          <AiFillStepForward
            // onClick={onPlayNext}
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            " 
          />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <VolumeIcon 
              // onClick={toggleMute} 
              className="cursor-pointer" 
              size={34} 
            />
            <Slider 
              // value={volume} 
              // onChange={(value) => setVolume(value)}
            />
          </div>
        </div>
    </div>
  )
}

export default PlayerContent