'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

type CareerFormProps = {
    formData: {
        studyField: string
        specialization: string
        interests: string
        skills: string
        certificationCourses: string
        currentJobTitle: string
        yearsOfWorkExperience: string
        preferredLocation: string
        jobType: string
        industriesOfInterest: string
        languagesSpoken: string
        careerGoals: string
        activelySeekingJob: string
        workSetting: string
        expectedSalary: string
        availabilityToStart: string
    }
    setFormData: (data: any) => void
}

export default function CareerForm({ formData, setFormData }: CareerFormProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (value: string, name: string) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Profile Updated:', formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-2">
                <Label htmlFor="studyField">Study Field</Label>
                <Input
                    id="studyField"
                    name="studyField"
                    placeholder="e.g., Computer Science"
                    value={formData.studyField}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                    id="specialization"
                    name="specialization"
                    placeholder="e.g., Artificial Intelligence"
                    value={formData.specialization}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Textarea
                    id="interests"
                    name="interests"
                    placeholder="e.g., Data Science, Software Development"
                    value={formData.interests}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                    id="skills"
                    name="skills"
                    placeholder="e.g., Python, Java, Communication"
                    value={formData.skills}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="certificationCourses">Certification Courses</Label>
                <Input
                    id="certificationCourses"
                    name="certificationCourses"
                    placeholder="e.g., AWS Certified Developer"
                    value={formData.certificationCourses}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="currentJobTitle">Current Job Title</Label>
                <Input
                    id="currentJobTitle"
                    name="currentJobTitle"
                    placeholder="e.g., Software Engineer"
                    value={formData.currentJobTitle}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="yearsOfWorkExperience">Years of Work Experience</Label>
                <Input
                    id="yearsOfWorkExperience"
                    name="yearsOfWorkExperience"
                    placeholder="e.g., 3"
                    value={formData.yearsOfWorkExperience}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="preferredLocation">Preferred Location</Label>
                <Input
                    id="preferredLocation"
                    name="preferredLocation"
                    placeholder="e.g., New York, Remote"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Select onValueChange={(value) => handleSelectChange(value, 'jobType')}>
                    <SelectTrigger>
                        <SelectValue placeholder={formData.jobType || "Select Job Type"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="industriesOfInterest">Industries of Interest</Label>
                <Textarea
                    id="industriesOfInterest"
                    name="industriesOfInterest"
                    placeholder="e.g., Technology, Healthcare"
                    value={formData.industriesOfInterest}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="languagesSpoken">Languages Spoken</Label>
                <Input
                    id="languagesSpoken"
                    name="languagesSpoken"
                    placeholder="e.g., English, Spanish"
                    value={formData.languagesSpoken}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="careerGoals">Career Goals</Label>
                <Textarea
                    id="careerGoals"
                    name="careerGoals"
                    placeholder="e.g., Become a CTO in 5 years"
                    value={formData.careerGoals}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="activelySeekingJob">Actively Seeking Job?</Label>
                <Select onValueChange={(value) => handleSelectChange(value, 'activelySeekingJob')}>
                    <SelectTrigger>
                        <SelectValue placeholder={formData.activelySeekingJob || "Select Yes/No"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="workSetting">Preferred Work Setting</Label>
                <Select onValueChange={(value) => handleSelectChange(value, 'workSetting')}>
                    <SelectTrigger>
                        <SelectValue placeholder={formData.workSetting || "Select Work Setting"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="on-site">On-site</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="expectedSalary">Expected Salary</Label>
                <Input
                    id="expectedSalary"
                    name="expectedSalary"
                    placeholder="e.g., $70,000"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="availabilityToStart">Availability to Start</Label>
                <Input
                    id="availabilityToStart"
                    name="availabilityToStart"
                    placeholder="e.g., 2 weeks"
                    value={formData.availabilityToStart}
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" className="w-full">Update Profile</Button>
        </form>
    )
}
