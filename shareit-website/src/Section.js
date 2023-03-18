function Section({ children }) {
    const sectionRef = useRef(null);
    const [opacity, setOpacity] = useState(0);
  
    useEffect(() => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset + window.innerHeight;
        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const distanceFromTop = scrollPosition - sectionTop;
          const opacity = 1 - distanceFromTop / (sectionHeight / 2);
          setOpacity(opacity);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className="section" ref={sectionRef} style={{ opacity }}>
        {children}
      </div>
    );
  }
  