import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import TextField from '@mui/material/TextField';

function Contact({ parentToChild }: any) {
  const { mode } = parentToChild || { mode: 'dark' };

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const validateForm = () => {
    const isNameEmpty = name.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    return !isNameEmpty && !isEmailEmpty && !isMessageEmpty;
  };

  const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const recipientEmail = 'your-email@gmail.com'; 
    const subject = encodeURIComponent(`Message from ${name} (${email}) via Portfolio`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleSendTelegram = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = `👋 Hello Brathna,\n\n👤 Name: ${name}\n📞 Contact: ${email}\n💬 Message: ${message}`;
    const telegramUrl = `https://t.me/sambrathnajr?text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  };

  // កំណត់ពណ៌ដាច់ខាតតាម mode
  const isDark = mode === 'dark';
  const textColor = isDark ? '#ffffff' : '#000000';
  const labelColor = isDark ? '#b0b0b0' : '#555555';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-input"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value) setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputLabelProps={{ shrink: true }}
                sx={{
                  // ប្រើប្រាស់ !important ដើម្បីទប់ស្កាត់មិនឱ្យ CSS ផ្សេងມາ Override ពណ៌អក្សរ
                  input: { color: `${textColor} !important`, WebkitTextFillColor: `${textColor} !important` },
                  label: { color: `${labelColor} !important` },
                  '& .MuiOutlinedInput-root': {
                    color: textColor,
                    '& fieldset': { borderColor: borderColor },
                    '&:hover fieldset': { borderColor: textColor },
                    '&.Mui-focused fieldset': { borderColor: textColor },
                  }
                }}
              />
              <TextField
                required
                id="email-input"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value) setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputLabelProps={{ shrink: true }}
                sx={{
                  input: { color: `${textColor} !important`, WebkitTextFillColor: `${textColor} !important` },
                  label: { color: `${labelColor} !important` },
                  '& .MuiOutlinedInput-root': {
                    color: textColor,
                    '& fieldset': { borderColor: borderColor },
                    '&:hover fieldset': { borderColor: textColor },
                    '&.Mui-focused fieldset': { borderColor: textColor },
                  }
                }}
              />
            </div>

            <TextField
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value) setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputLabelProps={{ shrink: true }}
              sx={{
                textarea: { color: `${textColor} !important`, WebkitTextFillColor: `${textColor} !important` },
                label: { color: `${labelColor} !important` },
                '& .MuiOutlinedInput-root': {
                  color: textColor,
                  '& fieldset': { borderColor: borderColor },
                  '&:hover fieldset': { borderColor: textColor },
                  '&.Mui-focused fieldset': { borderColor: textColor },
                }
              }}
            />
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={handleSendEmail}
                sx={{ flex: 1, minWidth: '150px' }}
              >
                Send via Email
              </Button>

              <Button 
                variant="contained" 
                startIcon={<TelegramIcon />} 
                onClick={handleSendTelegram}
                sx={{ 
                  flex: 1, 
                  minWidth: '150px',
                  backgroundColor: '#229ED9', 
                  '&:hover': { backgroundColor: '#1d87b9' } 
                }}
              >
                Send via Telegram
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;