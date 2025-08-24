"use client";
import Button, { ButtonVariant } from '@/components/buttons/Button';
import { PhoneCall } from 'lucide-react';
import React from 'react';

const NavInformation = () => {
  return (
    <div className="flex justify-end items-center gap-8">
      <a href="tel:" className="flex items-center gap-2 group shrink-0">
        <div className=" w-10 h-10 bg-white rounded-full flex justify-center items-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-gray-light">
          <PhoneCall />
        </div>
        <span
          className="text-secondary font-medium hover:underline group-hover:text-primary/90 transition-all duration-300"
        >
          +86-085-550-1539
        </span>
      </a>
      <div>
       <Button variant={ButtonVariant.PRIMARY} onClick={() => alert("Clicked!")}>
  Primary Button
</Button>
      </div>
    </div>
  );
};

export default NavInformation;
