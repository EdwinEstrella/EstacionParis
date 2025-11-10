import React from "react"

interface AvatarProps {
  className?: string
  children?: React.ReactNode
  src?: string
  alt?: string
}

interface AvatarImageProps {
  src: string
  alt?: string
  className?: string
}

interface AvatarFallbackProps {
  children: React.ReactNode
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ className, children, src, alt, ...props }) => {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ''}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
          {children}
        </div>
      )}
    </div>
  )
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt || "Avatar"}
      className={`aspect-square h-full w-full object-cover ${className || ''}`}
    />
  )
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600 ${className || ''}`}>
      {children}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback }