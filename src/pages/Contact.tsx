import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import VisitorCounter from '../components/VisitorCounter'
import ScrollToTop from '../components/ScrollToTop'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  React.useEffect(() => {
    document.title = 'Contact | ASK-Abdalrhman-Sabry'
    if (typeof window !== 'undefined' && (window as any).WOW) {
      new (window as any).WOW().init()
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        'service_6n4eqfj',         // ✅ Your actual Service ID
        'template_evk1czl',        // ✅ Your actual Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'eRt1d81MZdC55hD2J'        // ✅ Your actual Public Key
      )
      .then(() => {
        toast({
          title: 'Message Sent!',
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setIsSubmitting(false)
      })
      .catch(() => {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again later.',
          duration: 5000
        })
        setIsSubmitting(false)
      })
  }

  return (
    <div className="min-h-screen flex flex-col bg-pattern">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-navy">Contact Me</h1>
        <p className="text-xl text-gray-600 mb-12">Let's discuss your project</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="wow fadeInLeft" data-wow-delay="0.2s">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="subject">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="w-full min-h-[150px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="wow fadeInRight" data-wow-delay="0.4s">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p>Almansora, EGYPT</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p>askacounts001@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                    <a href="https://www.gooogle.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors" >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                  <p>Monday - Friday: 9 AM - 5 PM</p>
                  <p>Weekend: By appointment</p>
                </div>
                
                <div className="pt-4">
                  <iframe
                    title="Location Map"
                    className="w-full h-64 rounded-lg border"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.91667057138045!2d31.551450820144794!3d30.982568385926655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f781d57166fa9f%3A0x9c70a3952830cf43!2z2KfZhNmF2YbYstmE!5e0!3m2!1sar!2seg!4v1747747620013!5m2!1sar!2seg"
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
      <VisitorCounter />
      <ScrollToTop />
    </div>
  )
}

export default Contact
