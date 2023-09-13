import pickle
import sys
# import  sklearn

with open('models/rmr.pkl','rb') as f:
        rmr_model = pickle.load(f)
        print(rmr_model.predict([[sys.argv[1]]]))

