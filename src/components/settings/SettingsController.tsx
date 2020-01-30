import React, { useState } from 'react';

import Settings from './Settings';
import { SSettingsController } from './SettingsController.style';

const SettingController = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <SSettingsController type="button" onClick={handleOpen}>
        Settings
      </SSettingsController>
      {open && <Settings onClose={handleClose} />}
    </>
  );
};

export default SettingController;
