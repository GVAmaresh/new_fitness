import { Settings, Trophy, TrendingUp, Camera, Calendar, Activity, Brain, Scale, Heart, FileText, Lock, Shield, ChevronRight, BarChart3, Flame, Zap, Beef, Wheat, Droplets } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Profile() {
  const achievements = [
    { label: '90 Day', sublabel: 'Streak', value: '90', icon: '🔥', color: '#9b87f5' },
    { label: 'Water', sublabel: 'Achieved', value: '2.5L', icon: '💧', color: '#7dd3fc' },
    { label: 'Workout', sublabel: 'Achieved', value: '5', icon: '💪', icon2: '🏃', color: '#86efac' },
    { label: 'Calories', sublabel: 'Achieved', value: '2.2k', icon: '🍎', color: '#fca5a5' },
    { label: '10,000', sublabel: 'Steps', value: '10k', icon: '👟', color: '#cbd5e1' },
  ];

  const progressPictures = [
    { date: 'January 5th, 2026', label: 'Current', image: 'https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NzU5NzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { date: 'December 1st, 2025', label: 'Progress', image: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { date: 'November 1st, 2025', label: 'Starting', image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBkdW1iYmVsbHxlbnwxfHx8fDE3Njc1OTc4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  return (
    <div className="min-h-screen bg-black px-6 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-10 h-10"></div>
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#CCFF00] to-[#DFFF00] mx-auto mb-4 flex items-center justify-center text-black text-3xl">
          A
        </div>
        <h1 className="text-2xl mb-1">Alex</h1>
        <p className="text-sm text-gray-500">Your personal account</p>
      </div>

      {/* Health Score Card */}
      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-500 mb-1">Your Fitness Score</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl text-[#CCFF00]">63</span>
              <span className="text-sm text-gray-500">Out of 100</span>
            </div>
            <div className="space-y-1 text-xs text-gray-500">
              <div>Body Type: Athletic</div>
              <div>Fitness Type: Intermediate</div>
              <div>Age: 23</div>
            </div>
            <p className="text-xs text-gray-600 mt-2">*Calculated from test report</p>
          </div>
          <div className="relative w-24 h-24">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="44"
                stroke="#CCFF00"
                strokeWidth="8"
                fill="none"
                opacity="0.1"
              />
              <circle
                cx="48"
                cy="48"
                r="44"
                stroke="#CCFF00"
                strokeWidth="8"
                fill="none"
                strokeDasharray="276"
                strokeDashoffset="102"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Today's Achievements */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-[#CCFF00]" />
          <h3 className="text-lg">Today's Achievements</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/5 rounded-2xl p-4 border border-white/10 w-28"
            >
              <div 
                className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${achievement.color}20` }}
              >
                {achievement.icon}
              </div>
              <div className="text-center mb-1">{achievement.value}</div>
              <div className="text-xs text-gray-500 text-center">{achievement.label}</div>
              <div className="text-xs text-gray-600 text-center">{achievement.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Weight */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#CCFF00]" />
          <h3 className="text-lg">Your Weight</h3>
        </div>
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="text-2xl text-[#CCFF00] mb-4">160 lb</div>
          
          {/* Weight Chart */}
          <div className="relative h-32 mb-4">
            <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path
                d="M0 50 Q25 60, 50 55 T100 65 Q125 60, 150 50 T200 55 Q225 60, 250 58 T300 65"
                stroke="#CCFF00"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-black" />
              </div>
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 text-xs text-gray-600">180 lb</div>
            <div className="absolute left-0 top-1/3 text-xs text-gray-600">150 lb</div>
            <div className="absolute left-0 top-2/3 text-xs text-gray-600">120 lb</div>
            <div className="absolute left-0 bottom-0 text-xs text-gray-600">90 lb</div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-gray-600">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>

      {/* Progress Pictures */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#CCFF00]" />
            <h3 className="text-lg">Progress Pictures</h3>
          </div>
          <button className="w-8 h-8 rounded-full bg-[#CCFF00] flex items-center justify-center">
            <Camera className="w-4 h-4 text-black" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {progressPictures.map((picture, index) => (
            <div key={index} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-40">
                <img
                  src={picture.image}
                  alt={picture.label}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-2 left-2 right-2">
                  <div className="flex items-center gap-1 text-xs text-gray-300">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[10px]">{picture.date}</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-sm">{picture.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="text-xs text-gray-500 mb-1">Total Workouts</div>
          <div className="text-2xl text-[#CCFF00]">142</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="text-xs text-gray-500 mb-1">Active Days</div>
          <div className="text-2xl text-[#DFFF00]">90</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="text-xs text-gray-500 mb-1">Calories Burned</div>
          <div className="text-2xl text-[#FFFF00]">84.2k</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="text-xs text-gray-500 mb-1">Avg Heart Rate</div>
          <div className="text-2xl text-[#CCFF00]">94 bpm</div>
        </div>
      </div>

      {/* Privacy & Trust Indicator */}
      <div className="mt-8 flex items-center justify-center gap-2 opacity-20 pb-8">
        <Shield className="w-3 h-3 text-gray-500" />
        <p className="text-[8px] font-bold uppercase tracking-widest text-gray-500 text-center px-8">
          Figma Make is not meant for collecting PII or securing sensitive data
        </p>
      </div>

      {/* Section 1: Body Metrics */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg">Body Metrics</h3>
        </div>
        
        {/* BMI Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="text-sm text-gray-400 mb-2">BMI (Body Mass Index)</h4>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl text-cyan-400">22.4</span>
                <span className="text-sm text-gray-500">kg/m²</span>
              </div>
              <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-3">
                <span className="text-sm text-green-400">Healthy Range</span>
              </div>
              <p className="text-xs text-gray-600">Calculated from height & weight</p>
            </div>
            
            {/* Circular Progress Ring */}
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90">
                <defs>
                  <filter id="bmi-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="#06b6d4"
                  strokeWidth="6"
                  fill="none"
                  opacity="0.1"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="#06b6d4"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="314"
                  strokeDashoffset="94"
                  strokeLinecap="round"
                  filter="url(#bmi-glow)"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg text-cyan-400">70%</div>
                  <div className="text-[10px] text-gray-500">Optimal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Stress & Work-Life Balance */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg">Wellness & Balance</h3>
        </div>
        
        <div className="space-y-3">
          {/* Stress Level Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <h4 className="text-sm text-gray-400 mb-4">Stress Level</h4>
            
            {/* Wave-style Stress Indicator */}
            <div className="relative mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Low</span>
                <span className="text-xs text-gray-500">Moderate</span>
                <span className="text-xs text-gray-500">High</span>
              </div>
              
              <div className="relative h-12 bg-white/5 rounded-full overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-red-500/20"></div>
                
                {/* Current level indicator */}
                <div 
                  className="absolute top-0 left-0 h-full w-2/5 bg-gradient-to-r from-green-500/40 to-green-500/20 transition-all duration-700"
                  style={{ width: '35%' }}
                ></div>
                
                {/* Marker */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50 transition-all duration-700"
                  style={{ left: '35%' }}
                ></div>
              </div>
              
              <div className="mt-3 flex items-center justify-center">
                <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="text-sm text-green-400">Low Stress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work-Life Balance Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500">
            <h4 className="text-sm text-gray-400 mb-4">Work-Life Balance</h4>
            
            {/* Balance Meter */}
            <div className="relative mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Work</span>
                <span className="text-xs text-gray-500">Life</span>
              </div>
              
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-r from-cyan-500/40 to-cyan-500/20"></div>
                  <div className="w-1/2 bg-gradient-to-r from-blue-500/20 to-blue-500/40"></div>
                </div>
                
                {/* Center marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              </div>
              
              <div className="mt-3 flex items-center justify-center">
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  <span className="text-sm text-cyan-400">Well Balanced</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-600 text-center">Based on activity & routine</p>
          </div>
        </div>
      </div>

      {/* Section 3: Medical History */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-red-400" />
          <h3 className="text-lg">Medical History</h3>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="text-base mb-1">Health Records</h4>
              <p className="text-xs text-gray-500">Last updated: 3 months ago</p>
            </div>
          </div>
          
          {/* Medical Summary Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-400 mb-0.5">Blood Pressure</div>
              <div className="text-sm text-green-400">120/80</div>
            </div>
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-400 mb-0.5">Blood Sugar</div>
              <div className="text-sm text-green-400">Normal</div>
            </div>
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-400 mb-0.5">Thyroid</div>
              <div className="text-sm text-green-400">Normal</div>
            </div>
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-400 mb-0.5">Asthma</div>
              <div className="text-sm text-yellow-400">Mild</div>
            </div>
          </div>
          
          <button className="w-full py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/20 transition-all duration-300 flex items-center justify-center gap-2">
            <span>View / Update History</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section 4: NextLife – Medical Data Link */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
          {/* NextLife Logo/Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base text-cyan-400 mb-0.5">NextLife Health Records</h4>
              <p className="text-xs text-gray-400">Your medical data, securely connected</p>
            </div>
          </div>
          
          {/* Medical Data Icons */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-2">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-xs text-gray-400">Reports</span>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xs text-gray-400">Prescriptions</span>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                <Activity className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs text-gray-400">Tests</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span className="font-medium">View Medical Data</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Privacy & Trust Indicator */}
      <div className="flex items-center justify-center gap-2 text-gray-600 text-xs mb-6">
        <Lock className="w-3.5 h-3.5" />
        <span>Your health data is private and encrypted</span>
      </div>
    </div>
  );
}