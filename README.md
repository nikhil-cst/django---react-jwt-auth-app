How to run this program -

### Step 1 (Setup for backend) :

#### Create virtual envrionment (activate venv) and install requirements:

```bash 
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

#### Run migration for our models to create tables in database

```bash 
python manage.py makemigrations

python manage.py migrate 
```

#### To run django app 
```bash 
python manage.py runserver
```

### Step 2 (Setup for forntend):
Install dependencies
```bash 
cd forntend

npm install
```

Start the react forntend
```bash
npm start
```