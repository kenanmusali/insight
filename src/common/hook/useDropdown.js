import { useEffect, useRef, useState } from 'react';

export default function useDropdown() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (triggerRef.current?.contains(e.target)) return;
      if (menuRef.current?.contains(e.target)) return;
      close();
    }
    function onEsc(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  return { open, toggle, close, triggerRef, menuRef };
}
