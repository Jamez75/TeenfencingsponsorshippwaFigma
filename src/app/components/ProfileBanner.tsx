import { ImageWithFallback } from './figma/ImageWithFallback';
import { Swords, GraduationCap } from 'lucide-react';

export function ProfileBanner() {
  return (
    <div className="w-full">
      <div className="relative h-[200px] overflow-visible w-full" style={{ background: 'linear-gradient(135deg, var(--ph-blue) 0%, var(--ph-red) 100%)' }}>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 390 100"
          fill="none"
          preserveAspectRatio="none"
          style={{ height: '50px' }}
        >
          <path
            d="M 0,50 Q 97.5,10 195,50 Q 292.5,90 390,50 L 390,100 L 0,100 Z"
            fill="white"
          />
        </svg>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[77px]">
          <div className="w-[155px] h-[155px] rounded-full border-4 overflow-hidden shadow-lg bg-white border-[var(--brand-accent)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1487491444334-76fa4a099351?w=400"
              alt="Athlete"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-24 flex flex-col items-center pb-2 px-4">
        <h1 className="text-3xl text-center font-bold text-[var(--brand-primary)] mb-2">Christine May Morales</h1>
        <div className="flex items-center gap-2 mb-1">
          <Swords className="w-5 h-5 text-[var(--brand-primary)]" />
          <p className="text-center text-[var(--brand-primary)] font-bold text-[16px]">Fencing Prodigy</p>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[var(--brand-primary)]" />
          <p className="text-center text-[var(--brand-primary)] font-bold text-[16px]">Honor Roll student - UE Manila</p>
        </div>
      </div>
    </div>
  );
}

