import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { ReactNode } from 'react';

export const Popup = ({
  onClose,
  isOpen,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
}) => (
  <Dialog onClose={onClose} open={isOpen} sx={{ minWidth: '30%' }}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);
