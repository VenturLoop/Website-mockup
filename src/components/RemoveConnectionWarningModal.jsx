// src/components/RemoveConnectionWarningModal.jsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog'; // Adjusted path
import { Button } from '../ui/button'; // Adjusted path

const RemoveConnectionWarningModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">Remove Connection?</DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Are you sure you want to remove this connection? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose} className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveConnectionWarningModal;
