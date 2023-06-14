# Description

This is a web application that displays a list of patients and their treatments.
You can manage the list of patients and treatments by adding, editing and deleting them.
Same goes for the doctors.

## How to run

```bash
npm install
npm run start
```

# Techical Documentation

The default API endpoint is `http://localhost:3000/`. You can change it in the services if needed.

## Folder Structure

```
src
├── app
│   ├── types
│   ├── doctor
│   │   ├── ...
│   ├── patient
│   │   ├── ...
│   ├── treatment
│   │   ├── components
│   │   ├── services
```

I sorted the files by feature. Each feature has its own folder with its own components and services.

## Tailwind CSS

I used Tailwind CSS to organize the layout of the page and add some style when needed.

# User Documentation

1. Go to the doctors page and create a doctor.
2. Go to the patients page and create a patient.
3. Go to the patient details page and create a treatment.
