import pickle
import sys
import  sklearn


with open('models/ababoost_us.pkl','rb') as f:
        mus_model = pickle.load(f)
        print(mus_model.predict([[sys.argv[1],	sys.argv[2]]]))
