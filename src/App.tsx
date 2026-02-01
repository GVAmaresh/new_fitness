import { useState } from 'react';
import { Home } from './components/fitness/Home';
import { Activity } from './components/fitness/Activity';
import { TrainingPlan } from './components/fitness/TrainingPlan';
import { Nutrition } from './components/fitness/Nutrition';
import { AICoach } from './components/fitness/AICoach';
import { Profile } from './components/fitness/Profile';
import { Coaches } from './components/fitness/Coaches';
import { CoachProfile } from './components/fitness/CoachProfile';
import { Gyms } from './components/fitness/Gyms';
import { GymsVideo } from './components/fitness/GymsVideo';
import { GymChannel } from './components/fitness/GymChannel';
import { GymDetail } from './components/fitness/GymDetail';
import { VideoPlayer } from './components/fitness/VideoPlayer';
import { YogaStudios } from './components/fitness/YogaStudios';
import { YogaStudioDetail } from './components/fitness/YogaStudioDetail';
import { PersonalCoachFlow } from './components/fitness/PersonalCoachFlow';
import { BottomNav } from './components/fitness/BottomNav';

type Screen = 'home' | 'activity' | 'ai' | 'stats' | 'profile' | 'coaches' | 'coach-profile' | 'gyms' | 'gyms-video' | 'gym-channel' | 'gym-detail' | 'video-player' | 'yoga-studios' | 'yoga-studio-detail' | 'personal-coach-flow';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleNavigate = (screen: Screen, data?: any) => {
    setActiveScreen(screen);
    setSelectedData(data);
  };

  const handleBack = () => {
    if (activeScreen === 'coach-profile') {
      setActiveScreen('coaches');
    } else if (activeScreen === 'gym-detail') {
      setActiveScreen('gyms');
    } else if (activeScreen === 'gym-channel') {
      setActiveScreen('gyms-video');
    } else if (activeScreen === 'video-player') {
      setActiveScreen('gyms-video');
    } else if (activeScreen === 'yoga-studio-detail') {
      setActiveScreen('yoga-studios');
    } else if (activeScreen === 'personal-coach-flow') {
      setActiveScreen('home');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {activeScreen === 'home' && <Home onNavigate={handleNavigate} />}
      {activeScreen === 'activity' && <Activity />}
      {activeScreen === 'ai' && <AICoach />}
      {activeScreen === 'stats' && <Nutrition />}
      {activeScreen === 'profile' && <Profile />}
      {activeScreen === 'coaches' && <Coaches onNavigate={handleNavigate} />}
      {activeScreen === 'coach-profile' && <CoachProfile coach={selectedData} onBack={handleBack} />}
      {activeScreen === 'gyms' && <Gyms onNavigate={handleNavigate} />}
      {activeScreen === 'gyms-video' && <GymsVideo onNavigate={handleNavigate} />}
      {activeScreen === 'gym-channel' && <GymChannel gym={selectedData} onBack={handleBack} onNavigate={handleNavigate} />}
      {activeScreen === 'gym-detail' && <GymDetail gym={selectedData} onBack={handleBack} />}
      {activeScreen === 'video-player' && <VideoPlayer video={selectedData} onBack={handleBack} onNavigate={handleNavigate} />}
      {activeScreen === 'yoga-studios' && <YogaStudios onNavigate={handleNavigate} />}
      {activeScreen === 'yoga-studio-detail' && <YogaStudioDetail studio={selectedData} onBack={handleBack} />}
      {activeScreen === 'personal-coach-flow' && <PersonalCoachFlow onBack={handleBack} />}
      
      <BottomNav active={activeScreen as any} onNavigate={(screen) => handleNavigate(screen as Screen)} />
    </div>
  );
}