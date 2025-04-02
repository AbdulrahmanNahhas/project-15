
import React from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const ChartContainer = ({ title, subtitle, children, className }: ChartContainerProps) => {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm hover-scale",
      className
    )}>
      <div className="mb-4 p-5">
        <h3 className="text-lg font-display font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="w-full h-[300px]">
        {children}
      </div>
    </div>
  );
};

// Progress Chart Component
interface ProgressChartProps {
  data: Array<{
    day: string;
    minutes: number;
    xp: number;
  }>;
  className?: string;
}

export const ProgressLineChart = ({ data, className }: ProgressChartProps) => {
  return (
    <ChartContainer 
      title="تقدم التعلم" 
      subtitle="الدقائق المستغرقة والنقاط المكتسبة في الأسبوع الماضي" 
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "0.5rem", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
            labelFormatter={(label) => `اليوم: ${label}`}
            formatter={(value, name) => {
              if (name === "minutes") return [`${value} دقيقة`, "وقت التعلم"];
              if (name === "xp") return [`${value} XP`, "النقاط المكتسبة"];
              return [value, name];
            }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="minutes"
            stroke="#3B82F6"
            activeDot={{ r: 6 }}
            strokeWidth={2}
            name="minutes"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="xp"
            stroke="#10B981"
            activeDot={{ r: 6 }}
            strokeWidth={2}
            name="xp"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// Distribution Chart Component
interface SubjectDistributionProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  className?: string;
}

export const SubjectDistributionChart = ({ data, className }: SubjectDistributionProps) => {
  return (
    <ChartContainer 
      title="توزيع المواد" 
      subtitle="وقت الدراسة لكل مادة (بالدقائق)" 
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={40}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value} دقيقة`, "وقت الدراسة"]}
            contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "0.5rem", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          />
          <Legend verticalAlign="bottom" align="center" layout="horizontal" />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// Weekly Activity Component
interface WeeklyActivityProps {
  data: Array<{
    day: string;
    lessons: number;
    exercises: number;
  }>;
  className?: string;
}

export const WeeklyActivityChart = ({ data, className }: WeeklyActivityProps) => {
  return (
    <ChartContainer 
      title="النشاط الأسبوعي" 
      subtitle="الدروس والتمارين المكتملة" 
      className={className}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            formatter={(value, name) => {
              if (name === "lessons") return [`${value}`, "الدروس"];
              if (name === "exercises") return [`${value}`, "التمارين"];
              return [value, name];
            }}
            contentStyle={{ backgroundColor: "rgba(255,255,255,0.95)", borderRadius: "0.5rem", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          />
          <Legend 
            formatter={(value) => {
              if (value === "lessons") return "الدروس";
              if (value === "exercises") return "التمارين";
              return value;
            }}
          />
          <Bar dataKey="lessons" fill="#3B82F6" name="lessons" radius={[3, 3, 0, 0]} barSize={20} />
          <Bar dataKey="exercises" fill="#8B5CF6" name="exercises" radius={[3, 3, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
