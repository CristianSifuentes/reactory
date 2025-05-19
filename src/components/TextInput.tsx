import React, { useRef, useImperativeHandle, forwardRef } from 'react';

export interface TextInputHandle {
  focus: () => void;
}

export const TextInput = forwardRef<TextInputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    }
  }));

  return <input ref={inputRef} type="text" className="custom-input" />;
});
