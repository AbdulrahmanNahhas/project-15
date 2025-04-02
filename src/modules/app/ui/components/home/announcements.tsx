import React from 'react';
import { Bell, Book, Info, Trophy } from 'lucide-react';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  isNew?: boolean;
  category?: 'system' | 'course' | 'competition';
  author: {
    name: string;
    role: string;
  };
}

interface AnnouncementsProps {
  className?: string;
  announcements: Announcement[];
}

const Announcements = ({ announcements, className }: AnnouncementsProps) => {
  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'system':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'course':
        return <Book className="h-5 w-5 text-green-500" />;
      case 'competition':
        return <Trophy className="h-5 w-5 text-amber-500" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getCategoryClass = (category?: string) => {
    switch (category) {
      case 'system':
        return 'bg-accent/25 border border-border';
      case 'course':
        return 'bg-accent/25 border border-border';
      case 'competition':
        return 'bg-accent/25 border border-border';
      default:
        return 'bg-primary/5 border-primary/20';
    }
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">الإعلانات</h2>
        {announcements.some(a => a.isNew) && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            <Bell className="h-3 w-3 ml-1" />
            جديد
          </span>
        )}
      </div>
      
      <div className="space-y-3">
        {announcements.length === 0 ? (
          <p className="text-muted-foreground text-center py-6">لا توجد إعلانات</p>
        ) : (
          announcements.slice(0, 3).map((announcement) => (
            <div 
              key={announcement.id} 
              className={`p-5 rounded-xl border ${announcement.isNew ? 'border-primary/30 bg-primary/5' : `border-border ${getCategoryClass(announcement.category)}`}`}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-1">
                  {getCategoryIcon(announcement.category)}
                </div>
                
                <div className="flex-grow flex flex-col gap-3">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{announcement.title}</h3>
                    <span className="text-xs text-muted-foreground">{announcement.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground font-light leading-6 text-justify line-clamp-2">{announcement.content}</p>
                
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-medium">
                      {announcement.author.name} • <span className="text-muted-foreground font-light">{announcement.author.role}</span>
                    </span>
                    <a href="#" className="text-xs text-primary hover:underline">قراءة المزيد</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        
        {announcements.length > 3 && (
          <div className="flex justify-center">
            <a href="#" className="text-sm text-primary hover:underline">عرض جميع الإعلانات</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;