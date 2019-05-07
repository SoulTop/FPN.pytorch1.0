from .resnet import resnetfpn
import torch
import pdb

def base_models(modelname, model_dir, pretrained=True):

    if modelname[:6] == 'resnet':
        modelperms = {'resnet18': [2, 2, 2, 2], 'resent34': [3, 4, 6, 3], 'resnet50': [3, 4, 6, 3],
                      'resnet101': [3, 4, 23, 3], 'resent152': [3, 8, 36, 3]}
        model = resnetfpn(modelperms[modelname], modelname)
        if pretrained and len(model_dir)>1:
            load_dict = torch.load(model_dir + modelname+'.pth')
            # print(load_dict.keys(), '\n\n', model.state_dict().keys())
            model.load_my_state_dict(load_dict)

        return model
