import pickle
import sys
# import  sklearn


with open('models/ucsvsr.pkl','rb') as f:
        ucsvsr_model = pickle.load(f)
        print(ucsvsr_model.predict([[sys.argv[1], sys.argv[2], sys.argv[3]]]))
