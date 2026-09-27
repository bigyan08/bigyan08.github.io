---
title: "The Effectiveness of Feature Attribution Methods and its Correlation with Automatic Evaluation Scores"
authors: ["Giang Nguyen", "Daeyoung Kim", "Anh Nguyen"]
year: 2021
venue: "NeurIPS 2021"
arxiv_url: "https://arxiv.org/abs/2105.14944"
slug: "feature-attribution-effectiveness"
tags: ["explainability", "grad-cam", "evaluation", "user-study"]
---
\nExplainability matters very much in this AI era, since it is being used in many critical areas such as legal and medical domains. AI should not be just a black box that produces outputs without actually providing information about the main criteria that resulted in a conclusion. These decisions impact human lives in various aspects. Although there are many existing studies that have worked on this specific topic, all of them have one major issue in common. They simply apply mathematical operations instead of actually helping humans understand the AI, even though humans are the target end users. In many cases, rather than helping humans, they confuse them even more. According to the paper, an image classifier’s decisions can be explained via an attribution map (AM), which is a heatmap that highlights the input pixels that are important for or against a predicted label.

This paper aims to conduct the first user study to measure AM effectiveness in assisting humans on standard dog and ImageNet classification tasks, which are the tasks that most attribution methods were designed for. A total of 320 lay users and 11 expert users were provided with an image, an AI prediction, and an AM, and they were asked whether the AI was correct or not. According to those experts, 3-NN is significantly more useful than Grad-CAM. The chosen model was ResNet-34, pretrained on ImageNet, as the target classifier for both ImageNet and Stanford Dogs classification tasks. ResNet was chosen because it was widely used in research for feature attribution. Multiple visual explanation methods were used, including AI-only (where the AI just predicts based on a threshold), confidence scores only (where only confidence scores were given without predictions), Grad-CAM (a gradient-based method that looks into the flow of gradients between layers to highlight the important portions), SOD (Salient Object Detection, which simply highlights the most important part of the image without any explanation), and finally 3-NN (where the AI prediction is provided along with the 3 nearest classes, and then the user has to decide whether the prediction is correct). Participants were recruited via Prolific at $10 per hour.

The training process was conducted on participants by familiarizing them with the image classification task, and they were given practice questions. After they answered, they were provided with feedback and the ground-truth answers. Similarly, for validation and testing, each user was asked 40 yes/no questions in total. Before each question, they were provided with a short definition of the predicted class and three random training-set images that were correctly classified into the predicted class with a confidence score of at least 0.9. The dataset was curated very carefully for this task and then categorized into three types:

1. Correctly classified real images
    
2. Misclassified real images
    
3. Adversarial images (also misclassified)
    

From the ImageNet and Dogs datasets, low-resolution and grayscale images were removed to avoid confusing the participants. After this filtering process, images were classified into Easy, Medium, and Hard categories based on confidence scores. Easy images had high confidence for correct predictions and low confidence for incorrect predictions. Hard images had high confidence for incorrect predictions and low confidence for correct predictions. Medium images had moderate confidence for both correct and incorrect predictions. The Foolbox library was used to generate adversarial images for the ResNet-34 classifier using Projected Gradient Descent (PGD). For each dataset, 150 correct real images, 150 incorrect real images, and 150 adversarial images were grouped.

The evaluation process aims to measure the correlation between three metrics:

1. Pointing Game: If the generated AM lies inside the human-annotated BB, then it is a hit; otherwise, it is a miss.
    
2. Intersection over Union (IoU): Measures the overlap between the human-annotated BB and the binarized AM.
    
3. Weakly-Supervised Localization (WSL): Measures IoU in terms of binary classification. If IoU > 0.5, then it is considered correctly localized; otherwise, it is not.
    

It was found that 3-NN is significantly better than other methods on the ImageNet subset, but it hurt user accuracy on the Stanford Dogs subset. The results are classified into multiple aspects. While comparing human-AI teams with AI alone, human-AI teams achieved better performance than AI alone (88.77% vs. 80.79%). However, similar performance did not transfer to Stanford Dogs, where AI alone outperformed human-AI teams by around 5% (81% vs. 76%). This was mainly because not all participants were good at differentiating dog breeds, compared to the ImageNet dataset, where generally naturally occurring images were present. However, while using 3-NN, human-AI teams outperformed every other method, including AI-only. Overall, 3-NN was the most effective among all methods.

For the adversarial images, AI-only had 0% accuracy because the images were deliberately chosen to fool the model. On ImageNet, 3-NN provided a consistent +4% gain compared to confidence scores, achieving an accuracy of 75%. However, for the adversarial Dogs dataset, adding an explanation, either 3-NN or a heatmap, tended to cause users to agree with the model's incorrect decisions, since 3-NN often showed examples of breeds that were almost identical to the ground truth, making them difficult for lay users to distinguish.

While this is a great way to measure how explainability methods actually help humans, there is a non-controllable aspect to this study: the amount of prior knowledge a participant has before entering the study. An individual with extensive knowledge of dogs may perform better at dog classification, whereas another participant with no prior knowledge of dogs may perform worse. The researchers asked each user whether they knew a class before each trial, and based on this information, they found that prior knowledge accounted for around 1–6% of the accuracy. Additionally, this research was conducted online due to COVID, and therefore there were aspects that could have varied between participants, such as attentiveness to the study and screen resolution. Some participants may have had high-quality displays, while others may have used lower-quality screens to visualize the images.