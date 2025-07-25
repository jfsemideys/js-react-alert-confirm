import * as ReactDOMClient from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import './jsReactAlertConfirm.css';

type AlertOptions = { title?: string; message: string };
type ConfirmOptions = { title?: string; message: string };
type Resolver = (value: 'Yes' | 'No') => void;

let container: HTMLDivElement | null = null;
let currentResolver: Resolver | null = null;
let root: ReactDOMClient.Root | null = null;


function mountDialog(dialog: React.ReactNode) {
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  }

  
  root.render(dialog);
}

function unmountDialog() {
  if (root && container) {
    // const root = createRoot(container);
    root.unmount();
    document.body.removeChild(container);
    container = null;
  }
}

export function useJsReactAlertConfirm() {
  const jsReactAlert = {
    Alert: (options: AlertOptions): Promise<void> => {
      return new Promise<void>(resolve => {
        const handleClose = () => {
          unmountDialog();
          resolve();
        };
  
        mountDialog(
          <div className="dialog-backdrop">
            <div className="dialog">
              <h3>{options.title || 'Alert'}</h3>
              <p>{options.message}</p>
              <div className="dialog-footer">
                <button onClick={handleClose}>OK</button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const jsReactConfirm = {
    Confirm: (options: ConfirmOptions): Promise<'Yes' | 'No'> => {
      return new Promise(resolve => {
        currentResolver = resolve;

        mountDialog(
          <div className="dialog-backdrop">
            <div className="dialog">
              <h3>{options.title || 'Confirm'}</h3>
              <p>{options.message}</p>
              <div className="dialog-footer">
              <button
                onClick={() => {
                  currentResolver?.('Yes');
                  unmountDialog();
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  currentResolver?.('No');
                  unmountDialog();
                }}
              >
                No
              </button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return { jsReactAlert, jsReactConfirm };
}
