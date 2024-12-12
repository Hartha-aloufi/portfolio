function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-4xl relative">
        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-lg rotate-12 animate-float" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-lg -rotate-12 animate-float" 
          style={{ animationDelay: '1s' }} />
        
        {/* Content */}
        <div className="relative flex flex-col md:flex-row gap-8 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-in">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-mint 
              group transition-all duration-500 hover:shadow-lg hover:scale-105">
              <img 
                src="/me.jpg" 
                alt="Hartha Aloufi" 
                className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-110 animate-rotate-in"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-2 -right-2 w-48 h-48 
              rounded-lg bg-primary/10 animate-pulse-slow" />
            
            {/* Additional decorative elements */}
            <div className="absolute -z-10 w-4 h-4 rounded-full bg-primary/30 
              -top-2 -left-2 animate-pulse-slow" 
              style={{ animationDelay: '1s' }} />
            <div className="absolute -z-10 w-3 h-3 rounded-full bg-primary/20 
              bottom-0 -left-4 animate-pulse-slow"
              style={{ animationDelay: '2s' }} />
          </div>

          <div className="flex-1">
            <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary mb-4 
              font-medium">
              Welcome to my portfolio
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light 
              bg-clip-text text-transparent">
              Hartha Aloufi
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Senior Front-end Engineer
            </h2>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              I am a computer engineer who specializes in JavaScript programming language, 
              frontend with ReactJS and recently focused on serverless. With 8 years of 
              experience developing web apps supporting many fields such as education, 
              AI and 3D printing, I love to learn new technologies and make sure to share 
              and exchange knowledge with the team.
            </p>

            <div className="space-y-4 p-6 rounded-lg bg-white/50 dark:bg-dark-surface/50 
              backdrop-blur-sm shadow-soft">
              <p className="flex items-center hover:text-primary transition-colors">
                <span className="w-24 inline-block opacity-75">Email:</span>
                <a href="mailto:hartha.aloufi@gmail.com" 
                  className="text-primary hover:text-primary-dark">
                  hartha.aloufi@gmail.com
                </a>
              </p>
              <p className="flex items-center hover:text-primary transition-colors">
                <span className="w-24 inline-block opacity-75">Phone:</span>
                <a href="tel:+962785509479" 
                  className="text-primary hover:text-primary-dark">
                  +962 785509479
                </a>
              </p>
              <p className="flex items-center hover:text-primary transition-colors">
                <span className="w-24 inline-block opacity-75">Location:</span>
                <span>Amman, Jordan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;