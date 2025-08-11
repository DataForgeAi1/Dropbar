const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-light-gold rounded-full animate-spin" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner 