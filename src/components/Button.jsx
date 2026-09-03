import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  disabled = false,
  icon: Icon = null,
  ...props
}) {
  const baseStyles = 'font-bold rounded-md transition-all duration-300 flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'border border-violet-500 text-white hover:bg-violet-500/10 active:scale-95 shadow-[0_0_18px_rgba(124,58,237,0.2)]',
    secondary: 'border border-slate-800 text-slate-300 hover:border-violet-500 hover:text-white',
    ghost: 'text-slate-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <>
      {Icon && <Icon size={20} />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: !disabled ? 1.05 : 1 }}
      whileTap={{ scale: !disabled ? 0.95 : 1 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
